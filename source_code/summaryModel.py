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


#decoder

decoder_input_data = pad_sequences(y_train_sequences, maxlen = 250, padding = 'post')[:,:-1]
decoder_target_data = pad_sequences(y_train_sequences, maxlen = 250, padding = 'post')[:,1:]

decoder_input = Input(shape=(None,))
decoder_embedding = Embedding(input_dim = 1000, output_dim = 250)(decoder_input)
decoder_lstm = LSTM(256,return_sequences=True, return_state= True)
decoder_output, _, _ = decoder_lstm(decoder_embedding, initial_state = encoder_states)
attention = Attention()
context_vector = attention([decoder_output,encoder_output])
decoder_combined_context = tf.concat([decoder_output, context_vector], axis=-1)
decoder_dense = Dense(250, activation = 'softmax')
decoder_output = decoder_dense(decoder_combined_context)

RNN_model = Model([encoder_input,decoder_input], decoder_output)
RNN_model.compile(optimizer = 'adam', loss= 'sparse_categorical_crossentropy')
RNN_model.fit([X_train_padded,decoder_input_data], decoder_target_data, batch_size=32, epochs = 10)
