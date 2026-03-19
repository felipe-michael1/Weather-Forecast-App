"""
Connect the URL APIS - API USER
"""
from django.contrib import admin
from django.urls import path, include
from api_tempo.views import register
from api_tempo.views import login
from api_tempo.views import logout
from api_tempo.views import profile

urlpatterns = [
    path('admin', admin.site.urls),
    path('', include('clima.urls')),
    path("register", register),
    path("login", login),
    path("logout", logout),
    path("profile", profile),
]