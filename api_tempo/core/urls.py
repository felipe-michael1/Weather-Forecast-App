from django.urls import path, include

urlpatterns = [
    path("api/", include("../api_tempo.urls")),
]