from website import create_app

app = create_app()

#ONLY IF WE RUN THIS FILE WE ARE GOING TO EXECUTE THIS LINE.
if __name__ == '__main__':
    app.run(debug=True)
