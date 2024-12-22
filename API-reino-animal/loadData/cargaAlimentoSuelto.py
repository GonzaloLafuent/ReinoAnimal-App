import pandas as pd
import requests
import json

data_alimentoSuelto = pd.read_excel("./Precios-ReinoAnimal.xlsx",sheet_name="ALIMENTO SUELTO")

url = "http://localhost:5269/bulkFood"

data_alimentoSuelto = data_alimentoSuelto.drop(["%","Kg","Unnamed: 7","Unnamed: 8","Unnamed: 9","X kg","gcia x kg","Precio compra"],axis=1)

cant_succes = 0
cant_error = 0

print(data_alimentoSuelto)


for row in data_alimentoSuelto.itertuples():
    product = {"Description":row[1],"Brand":row[2], "Category":row[3],"Price":row[4]}

    response = requests.post(url,json=product)
    
    if response.status_code == 200:
        cant_succes += 1
    else: cant_error +=1

print("Productos cargados correctamente: ",cant_succes)
print("Productos cargados incorrectamente: ",cant_error)
