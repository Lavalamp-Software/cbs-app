package main

import (
	"bytes"
	"encoding/json"
	"net/http"
)

/*
   name : string,
   description : string,
   author: string,
   source: {[key : string]: string | string[] | stringMap}
*/

func main() {
	js, _ := json.Marshal(map[string]interface{}{
		"name":        "interpackage",
		"description": "an inter package2",
		"author":      "intervinn",
		"version":     "1.0.0",
		"source": map[string]string{
			"s": "sd",
		},
	})
	http.Post("http://127.0.0.1:3000/packages", "application/json", bytes.NewBuffer(js))
}
