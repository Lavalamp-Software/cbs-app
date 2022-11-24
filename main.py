import requests

requests.post(
    "http://127.0.0.1:3000/packages",
    headers={
        "Content-Type":"application/json"
    },
    json={
        "name":        "interpackage3",
        "description": "an inter package 3",
        "author":      "intervinn",
        "version":     "3.0.0",
        "source": {
            "module.hpp": "int main(){}"
        }
    }
)