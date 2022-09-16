from flask import Flask, render_template


app = Flask(__name__)

@app.route("/")
def hello_world():
    return render_template("index.html")

@app.route('/getmethod/<jsdata>')
def get_javascript_data(jsdata):
    return jsdata

if __name__ == "__main__":
    app.run(debug=True)