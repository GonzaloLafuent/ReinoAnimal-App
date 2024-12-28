import pandas as pd
import requests 

data_royalCanin = pd.read_excel("./Precios-ReinoAnimal.xlsx",sheet_name="ROYAL CANIN",header=None)

data_royalCanin = data_royalCanin.drop(labels=[12,11,10,9,8,7,6,4,3],axis= 1).drop(labels=[0,1],axis=0).dropna()

print(data_royalCanin)

url = "http://localhost:5269/royalCannin"

cant_succes = 0
cant_error = 0

for row in data_royalCanin.itertuples():
    product = {"Code": row[1], "Description":row[2], "Price": row[4] }

    response = requests.post(url,json=product)

    if response.status_code == 200:
        cant_succes += 1
        print("carga correctamente")
    else: cant_error +=1

print("Productos cargados correctamente: ",cant_succes)
print("Productos cargados incorrectamente: ",cant_error)
