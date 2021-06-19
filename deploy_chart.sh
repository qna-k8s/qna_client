#!/bin/bash
var=$(helm status qna-csr 2>&1)
errorMsg="Error: release: not found"
installCmd="helm install qna-csr ./helm_chart/qna_client \
            --set imageName=$imageName"
updateCmd="helm upgrade qna-csr ./helm_chart/qna_client --set imageName=$imageName"
echo "$var"
if [ "$var" = "$errorMsg" ]
then
    eval $installCmd
else
    eval $updateCmd
fi