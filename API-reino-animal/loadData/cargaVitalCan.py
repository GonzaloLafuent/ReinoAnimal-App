import pandas as pd
import requests 

data_vitalCan = pd.read_excel("./Precios-ReinoAnimal.xlsx",sheet_name="VITAL CAN",header=None)

data_vitalCan = data_vitalCan.drop(labels=[4,5,7,8,9,10,11,12,13],axis=1).drop(labels=[0,1],axis=0).dropna()

url = "http://localhost:3000/vitalCan"

cant_succes = 0
cant_error = 0

for row in data_vitalCan.itertuples():
    product = {"codigo": row[1], "descripcion":row[2], "costo": row[3], "costoFinal":row[4] , "venta": row[5] }

    response = requests.post(url,json=product)

    if response.status_code == 200:
        cant_succes += 1
        print("carga correctamente")
    else: cant_error +=1
    
print("Productos cargados correctamente: ",cant_succes)
print("Productos cargados incorrectamente: ",cant_error)
