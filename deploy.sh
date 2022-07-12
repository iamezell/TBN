docker build -t manifestjones/bigneedclient:latest -t manifestjones/bigneedclient:$SHA -f ./client/Dockerfile ./client
docker push manifestjones/bigneedclient:latest
docker push manifestjones/bigneedclient:$SHA

kubectl apply -f k8s
kubectl set image deployments/client-deployment client=manifestjones/bigneedclient:$SHA
