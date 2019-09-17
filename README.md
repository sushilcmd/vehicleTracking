# vehicleTracking

### Base URL : localhost:5002

### Save Vehicle details
    Method : POST
    URL : baseurl/vehicle/track/{token}
    example : localhost:5002/vehicle/track/123456


### Distance
    Calculate the distance between user current location and any vehicle
    
    Method : GET
    URL: `baseurl/distance/{regNo}`
    Example  `localhost:5002/distance/HR55AG4972`

    
    Response -

    ``` javascript
    {
    "msg": "Total distance is 535.4704658446936 KM",
    "statusCode": "D200",
    "status": true,
    "data": {
        "distance": 535.4704658446936,
        "llINfo": {
            "ll1": {
                "lat": "24.875678",
                "lon": "73.781351"
            },
            "ll2": {
                "lat": 28.6014,
                "lon": 77.1989
            }
          }
        }
    }
    ```
 
