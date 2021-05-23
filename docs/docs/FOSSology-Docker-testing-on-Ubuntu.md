An overview of installing FOSSology using docker on Ubuntu 14.04LTS

1. open command console

2. uname -a   
    [ensure kernel is 3.10 or greater. The first portion of response]

3. sudo apt-get install -y docker.io   
    [install docker]

4. sudo docker run hello-world   
    [confirm correct docker installation]

5. sudo docker pull fossology/fossology   
    [grab the latest build of FOSSology]

6. sudo docker images   
    [show available docker images.
     there should be 2 : fossology/fossology and hello-world]

7. sudo docker run -p 8081:80 fossology/fossology   
    [create a running container from the FOSSology image.
     redirect port 80 in the container to port 8081]

8. open a web browser

9. http://localhost:8081/repo/   
    [prepare to *enjoy* FOSSology.
     usr/pwd : fossy/fossy]

Away you go!
