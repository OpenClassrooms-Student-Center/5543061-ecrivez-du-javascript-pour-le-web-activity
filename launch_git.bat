@echo off
rem @Author Franck
rem This script allows to add the path pointing to git
rem You can now type > git config --global user.name "your-name"
rem and > git config --global user.email "your-email"
rem to verify the config > git config --list
set "PATH=D:\PortableGit\bin\;%PATH%"
cmd git.exe