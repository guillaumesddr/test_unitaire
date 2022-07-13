import build_model

def test_build_model():
    import pandas as pd 
    from sklearn.linear_model import LinearRegression
    import joblib
    X = [205.9991686803,2,0]
    model = joblib.load("regression.joblib")
    actual_result = model.predict()
    assert actgual_result > 0
    y = df['price']
    model = LinearRegression()
