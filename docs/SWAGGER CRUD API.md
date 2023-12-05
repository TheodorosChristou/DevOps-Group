```tsx

openapi: 3.0.0
info:
  title: NextJS Swagger
  version: 1.0.0
paths:
  /api/upload/:
    post:
      summary: Upload location information
      tags:
        - Create Location
      requestBody:
        required: true
        content:
          application/json:
            schema:
              type: object
              properties:
                Lat:
                  type: number
                  description: Latitude of the location
                Lon:
                  type: number
                  description: Longitude of the location
                City:
                  type: string
                  description: City of the location
                Description:
                  type: string
                  description: Description of the location
                Photos:
                  type: string
                  description: Photos of the location
      responses:
        '201':
          description: Location uploaded successfully
        '400':
          description: Bad Request. Invalid input data.
          
  /:
    get:
      summary: Check if Index reads Database
      tags:
        - Reading Database
      description: Shows if the database entries are up and running
      responses:
        '200':
          description: Database is up
        '500':
          description: Server Errror, database or server down
          

  /api/changes/{id}:
                    
    put:
      summary: Update a location by ID
      tags:
        - Update Location
      parameters:
        - in: path
          name: id
          required: true
          description: ID of the location to update
          schema:
            type: string
      requestBody:
        required: true
        content:
          application/json:
            schema:
              type: object
              properties:
                Lat:
                  type: number
                  description: Latitude of the location
                Lon:
                  type: number
                  description: Longitude of the location
                City:
                  type: string
                  description: City of the location
                Description:
                  type: string
                  description: Description of the location
                Photos:
                  type: string
                  description: Photos of the location
      responses:
        '200':
          description: Location updated successfully
          content:
            application/json:
              schema:
                type: object
                properties:
                  success:
                    type: boolean
                    description: Indicates whether the update was successful
                    example: true
                  data:
                    type: object
                    description: Updated location data
        '400':
          description: Bad Request. Unable to update the location.
          content:
            application/json:
              schema:
                type: object
                properties:
                  success:
                    type: boolean
                    description: Indicates whether the update was unsuccessful
                    example: false
                    
    delete:
      summary: Delete a location by ID
      tags:
        - Delete Location
      parameters:
        - in: path
          name: id
          required: true
          description: ID of the location to delete
          schema:
            type: string
      responses:
        '200':
          description: Location deleted successfully
          content:
            application/json:
              schema:
                type: object
                properties:
                  success:
                    type: boolean
                    description: Indicates whether the deletion was successful
                    example: true
                  data:
                    type: object
                    description: Deleted location data
        '400':
          description: Bad Request. Unable to delete the location.
          content:
            application/json:
              schema:
                type: object
                properties:
                  success:
                    type: boolean
                    description: Indicates whether the deletion was unsuccessful
                    example: false
components: {}

servers:
  - description: MongeeseMap
    url: https://com619mongeese.uksouth.cloudapp.azure.com/