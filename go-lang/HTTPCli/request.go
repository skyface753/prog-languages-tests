package main

import (
	"encoding/json"
   "io/ioutil"
   "log"
   "net/http"
   "fmt"
)

   //{"name": "Sammy", "message": "Hello, Sammy"}
   type Request struct {
	         Name    string `json:"name"`
		 	         Message string `json:"message"`
				 		 		  }
func main() {
//curl -X POST -F 'myName=Sammy' 'http://localhost:3333/hello'
   resp, err := http.PostForm("http://localhost:3333/hello",
      map[string][]string{"myName": {"Sammy"}})
   if err != nil {

      log.Fatalln(err)
   }
//We Read the response body on the line below.
   body, err := ioutil.ReadAll(resp.Body)
   
   if err != nil {
      log.Fatalln(err)
   }
//Parse the response body into the Request struct we defined earlier
   request := Request{}
   json.Unmarshal(body, &request)
//Print the name
   fmt.Println(request.Name)
   //Print the message
   fmt.Println(request.Message)
   sb := string(body)
   log.Printf(sb)
}
