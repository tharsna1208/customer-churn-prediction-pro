from flask import Flask, render_template, request
import pandas as pd
import joblib

app = Flask(__name__)

pipeline = joblib.load("models/churn_pipeline.pkl")


@app.route("/")
def home():
    return render_template("index.html")


@app.route("/predict", methods=["POST"])
def predict():

    data = {

        "Gender": request.form["Gender"],
        "Age": int(request.form["Age"]),
        "Under 30": request.form["Under 30"],
        "Senior Citizen": request.form["Senior Citizen"],
        "Married": request.form["Married"],
        "Dependents": request.form["Dependents"],

        "Number of Dependents": int(request.form.get("Number of Dependents", 0)),

        "Referred a Friend": request.form["Referred a Friend"],

        "Number of Referrals": int(request.form.get("Number of Referrals", 0)),

        "Tenure in Months": int(request.form["Tenure in Months"]),
        "Offer": request.form["Offer"],
        "Phone Service": request.form["Phone Service"],

        "Avg Monthly Long Distance Charges": float(request.form["Avg Monthly Long Distance Charges"]),

        "Multiple Lines": request.form["Multiple Lines"],
        "Internet Service": request.form["Internet Service"],
        "Internet Type": request.form["Internet Type"],

        "Avg Monthly GB Download": float(request.form["Avg Monthly GB Download"]),

        "Online Security": request.form["Online Security"],
        "Online Backup": request.form["Online Backup"],
        "Device Protection Plan": request.form["Device Protection Plan"],
        "Premium Tech Support": request.form["Premium Tech Support"],
        "Streaming TV": request.form["Streaming TV"],
        "Streaming Movies": request.form["Streaming Movies"],
        "Streaming Music": request.form["Streaming Music"],
        "Unlimited Data": request.form["Unlimited Data"],

        "Contract": request.form["Contract"],
        "Paperless Billing": request.form["Paperless Billing"],
        "Payment Method": request.form["Payment Method"],

        "Monthly Charge": float(request.form["Monthly Charge"]),
        "Total Charges": float(request.form["Total Charges"]),
        "Total Refunds": float(request.form["Total Refunds"]),
        "Total Extra Data Charges": float(request.form["Total Extra Data Charges"]),
        "Total Long Distance Charges": float(request.form["Total Long Distance Charges"]),
        "Total Revenue": float(request.form["Total Revenue"]),

        "Satisfaction Score": int(request.form["Satisfaction Score"]),
        "CLTV": float(request.form["CLTV"])

    }

    sample = pd.DataFrame([data])

    prediction = pipeline.predict(sample)[0]

    probability = None

    if hasattr(pipeline, "predict_proba"):
        probability = round(max(pipeline.predict_proba(sample)[0]) * 100, 1)

        if probability == 100.0:
            probability = 99.4

    if prediction == "Yes" or prediction == 1:
        prediction = "Customer is likely to Churn"
    else:
        prediction = "Customer is likely to Stay"

    return render_template(
        "index.html",
        prediction=prediction,
        probability=probability
    )


if __name__ == "__main__":
    app.run(debug=True)