
{{- define "qna_client.container_name" -}}
{{- printf "%s-%s" .Values.deployment.containerName .Release.Name | trunc 63 | trimSuffix "-" }}
{{- end }}

{{- define "qna_client.deployment_name" -}}
{{- printf "%s-%s" .Values.deployment.containerName .Release.Name | trunc 63 | trimSuffix "-" }}
{{- end }}

{{- define "qna_client.service_name" -}}
{{- printf "%s-%s" .Values.service.name .Release.Name | trunc 63 | trimSuffix "-" }}
{{- end }}
