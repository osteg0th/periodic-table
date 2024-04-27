#! /bin/bash
mongoimport --username admin --password pass --db PeriodicTable --collection chemicalElements --type json --file /PeriodicTableJSON.json --jsonArray