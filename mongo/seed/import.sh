#! /bin/bash
cd docker-entrypoint-initdb.d || exit 
mongoimport --host localhost:27017 --db PeriodicTable --collection ChemicalElements --file ./PeriodicTableJSON.json --jsonArray --username admin --password pass --authenticationDatabase admin
