from flask import Flask, render_template, request, jsonify
import joblib
import pandas as pd
from sklearn.feature_extraction.text import TfidfVectorizer
import re
import string
from nltk.corpus import stopwords
from nltk.stem.porter import PorterStemmer
from flask import Flask, jsonify
from flask_cors import CORS
from flask_cors import cross_origin
import tensorflow as tf
from transformers import BartTokenizer, TFBartForConditionalGeneration

app = Flask(__name__)




model = joblib.load('model.pkl')
vectorization = joblib.load('vectorization.pkl')
##vectorization = TfidfVectorizer()

bart_tokenizer = BartTokenizer.from_pretrained('facebook/bart-large-cnn')
bart_model = TFBartForConditionalGeneration.from_pretrained('facebook/bart-large-cnn')


@app.route('/summarize', methods=['POST'])
@cross_origin()
def summarize():
    input_text = request.json['data']
    print('Received input_text:', input_text)  

    print('summarized called')
    inputs = bart_tokenizer([input_text], max_length=1024, return_tensors='tf', truncation=True, padding=True)
    outputs = bart_model.generate(inputs['input_ids'])
    generated_summary = bart_tokenizer.decode(outputs[0], skip_special_tokens=True)
    return jsonify({'Summary': generated_summary})


port_stem = PorterStemmer()
def clean_and_lower(text):
    cleaned_text = re.sub(r'[^A-Za-z0-9]+', ' ', text)
    cleaned_text = cleaned_text.lower()
    cleaned_text = cleaned_text.split()
    cleaned_text = [port_stem.stem(word) for word in cleaned_text if not word in stopwords.words('english')]
    cleaned_text = ' '.join(cleaned_text)
    
    return cleaned_text







@app.route('/')
def index():
    return render_template('index.html')

@app.route('/api/data', methods=['GET'])
@cross_origin()
def get_data():
    print('hey they api call works')
    return jsonify({'message': 'Hello from Flask API!'})

@app.route('/process', methods=['POST'])
@cross_origin()
def process():
    print('post called')
    if request.method == 'POST':
        # data = request.json['data']
        data = request.json.get('data') 

        result = prediction(data)
        return result


def prediction(data):
    news_data = {'news_to_predict': [data]}
    df_news = pd.DataFrame(news_data)
    df_news['news_to_predict'] = df_news['news_to_predict'].apply(clean_and_lower)
    news_X_test = df_news['news_to_predict']
    news_X_test = vectorization.transform(news_X_test)
    confidence = model.predict_proba(news_X_test)[0].max()* 100
    result = model.predict(news_X_test)




    if result == 1:
        return "This News is Fake", confidence
    else:
        return "This is an Actual News", confidence
    
if __name__ == '__main__':
    app.run(debug=True)

print("all done main.py")

