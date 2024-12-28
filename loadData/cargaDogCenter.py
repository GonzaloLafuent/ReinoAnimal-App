import pandas as pd
import requests

data_dogCenter = pd.read_excel("./Precios-ReinoAnimal.xlsx",sheet_name="Dog Center",header=None)

data_dogCenter = data_dogCenter.drop(index=0,axis=0)

data_dogCenter = data_dogCenter.drop(labels=[12,11,10,9,8,7,5,4],axis=1)

data_dogCenter = data_dogCenter.dropna()

data_dogCenter = data_dogCenter.drop(index=1,axis=0)

url = "http://localhost:5269/dogCenter"

cant_succes = 0
cant_error = 0


for row in data_dogCenter.itertuples():
    product = {"Code": row[1], "Description":row[2], "Price": row[5] }

    response = requests.post(url,json=product)
        
    if response.status_code == 200:
        cant_succes += 1
    else: cant_error +=1
  
print("Productos cargados correctamente: ",cant_succes)
print("Productos cargados incorrectamente: ",cant_error)
