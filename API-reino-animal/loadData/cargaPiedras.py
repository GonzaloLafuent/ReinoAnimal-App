import pandas as pd
import requests

data_piedras = pd.read_excel("./Precios-ReinoAnimal.xlsx",sheet_name="PIEDRITAS")

print(data_piedras)

url = "http://localhost:3000/dogCenter"

cant_succes = 0
cant_error = 0

for row in data_piedras.itertuples():
    product = {"codigo": row[1], "descripcion":row[2], "costo": row[3], "costoFinal": row[4], "venta": row[5] }

    response = requests.post(url,json=product)
        
    if response.status_code == 200:
        cant_succes += 1
    else: cant_error +=1
  
print("Productos cargados correctamente: ",cant_succes)
print("Productos cargados incorrectamente: ",cant_error)
