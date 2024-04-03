import numpy as np
import pandas as pd
from sklearn.feature_extraction.text import TfidfVectorizer
from sklearn.model_selection import train_test_split
from sklearn.linear_model import  LogisticRegression
from sklearn.metrics import accuracy_score, classification_report
import re
import string
from nltk.corpus import stopwords
from nltk.stem.porter import PorterStemmer
import joblib

fake_news_path = "C:\\Users\\89tom\\OneDrive\\Desktop\\Pace\\Cs691\\FactFinder\\Fake.csv" 
actual_news_path = "C:\\Users\\89tom\\OneDrive\\Desktop\\Pace\\Cs691\\FactFinder\\True.csv"

df_fake = pd.read_csv(fake_news_path)
df_actual = pd.read_csv(actual_news_path)

df_fake['classification'] = 1
df_actual['classification'] = 0
df = pd.concat([df_fake,df_actual], axis=0)
df = df.sample(frac=1).reset_index(drop=True)
df = df.sample(frac = 0.05) ## taking sample of 5%

df['content'] = df['title'] + df['text']


# Removing special characters from dataset


port_stem = PorterStemmer()

def clean_and_lower(text):
    cleaned_text = re.sub(r'[^A-Za-z0-9]+', ' ', text)
    cleaned_text = cleaned_text.lower()
    cleaned_text = cleaned_text.split()
    cleaned_text = [port_stem.stem(word) for word in cleaned_text if not word in stopwords.words('english')]
    cleaned_text = ' '.join(cleaned_text)
    
    return cleaned_text

df['content'] = df['content'].apply(clean_and_lower)

X = df['content']
y = df['classification']

#vectorizing the data
vectorization = TfidfVectorizer()
X_vector = vectorization.fit_transform(X)

X_train, X_test, y_train,y_test = train_test_split(X_vector,y,test_size=0.25,random_state=42)

# fitting the data to the model
model = LogisticRegression()
model.fit(X_train,y_train)

joblib.dump(model, 'model.pkl')
joblib.dump(vectorization, 'vectorization.pkl')
print("all done")




