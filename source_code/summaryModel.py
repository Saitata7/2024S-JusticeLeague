import pandas as pd
from sklearn.feature_extraction.text import TfidfVectorizer
from sklearn.model_selection import train_test_split
import re
import string
import nltk
from nltk.corpus import stopwords
from nltk.stem.porter import PorterStemmer

# Define the path to the CSV file containing the data
csv_file_path = '/content/main.csv'
df_main = pd.read_csv(csv_file_path)

# Read the CSV file into a Pandas DataFrame
port_stem = PorterStemmer()
def clean_my_data(text):
    cleaned_text = re.sub(r'[^A-Za-z0-9]+', ' ', text)
    cleaned_text = cleaned_text.lower()
    cleaned_text = cleaned_text.split()
    cleaned_text = [port_stem.stem(word) for word in cleaned_text if not word in stopwords.words('english')]
    cleaned_text = ' '.join(cleaned_text)

    return cleaned_text


df_main['summary'] = df_main['summary'].apply(clean_my_data)

X = df_main['Text']
y = df_main['summary']

X_train, X_test, y_train, y_test = train_test_split(X, y, test_size=0.25, random_state = 42)

#Tokenize input and target summaries
tokenizer_x = Tokenizer(num_words=1000)
tokenizer_x.fit_on_texts(X_train)
X_train_sequences = tokenizer_x.texts_to_sequences(X_train)
#max_input_len = max(len(seq) for seq in X_train_sequences)

tokenizer_y = Tokenizer(num_words=250)
tokenizer_y.fit_on_texts(y_train)
y_train_sequences = tokenizer_y.texts_to_sequences(y_train)
#max_traget_len = max(len(seq) for seq in y_train_sequences)

X_train_padded = pad_sequences(X_train_sequences, maxlen = 1000, padding = 'post')
y_train_padded = pad_sequences(y_train_sequences, maxlen = 250, padding = 'post')


#encoder
encoder_input = Input(shape = (1000,))
encoder_embedding = Embedding(input_dim = 1000, output_dim = 250)(encoder_input)
encoder_lstm = LSTM(256,return_sequences=True, return_state= True)
encoder_output, state_h, state_c = encoder_lstm(encoder_embedding)
encoder_states = [state_h, state_c]
