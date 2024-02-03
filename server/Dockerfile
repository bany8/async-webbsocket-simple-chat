FROM python:3.10

RUN mkdir /app

ADD . /app/

RUN pip install --no-cache-dir -r /app/requirements.txt

WORKDIR /app

CMD ["python3", "chat_server.py"]

