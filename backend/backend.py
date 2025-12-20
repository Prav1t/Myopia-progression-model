import pandas as pd
import numpy as np

DATA_PATH = "database/myopia.csv"

def load_data():
    df = pd.read_csv(DATA_PATH, sep=";")
    return df

#Testing if data loads
def inspect_data(df):
    print("Shape:", df.shape)
    print("\nColumns:")
    print(df.columns)
    print("\nFirst 5 rows:")
    print(df)
if __name__ == "__main__":
    df = load_data()
    inspect_data(df)

def prepare_data(df):
    df = df.copy()
    # relevant columns for now
    cols = [
        "AGE",
        "GENDER",
        "SPHEQ",
        "MOMMY",
        "DADMY"
    ]
    df = df[cols]
    # if != spheq row is useless 
    df = df.dropna(subset=["SPHEQ"])
    for col in cols:
        df[col] = pd.to_numeric(df[col], errors="coerce")
    return df

def get_clean_data():
    df = load_data()
    df = prepare_data(df)
    return df

if __name__ == "__main__":
    df_raw = load_data()
    inspect_data(df_raw)

    df_clean = prepare_data(df_raw)
    print("\nCleaned data preview:")
    print(df_clean.head())

#dummy
def predict_dummy(age, mommy, dadmy):
    ages = list(range(age, 109))
    # fake linear progression (placeholder)
    spheq = [-0.2 * (a - age) for a in ages]

    return {
        "ages": ages,
        "spheq": spheq
    }
