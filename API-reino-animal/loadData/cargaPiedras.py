import pandas as pd
import requests

data_piedras = pd.read_excel("./Precios-ReinoAnimal.xlsx",sheet_name="PIEDRITAS",header=None)

data_piedras = data_piedras.drop(labels=[0,1],axis=0)

data_piedras = data_piedras.drop(labels=[0,3,4,6],axis=1)

print(data_piedras)

url = "http://localhost:5269/catPebble"

cant_succes = 0
cant_error = 0

for row in data_piedras.itertuples():
    product = {"Description":row[1], "Price": row[3] }

    response = requests.post(url,json=product)

    if response.status_code == 200:
        cant_succes += 1
    else: cant_error +=1

print("Productos cargados correctamente: ",cant_succes)
print("Productos cargados incorrectamente: ",cant_error)
