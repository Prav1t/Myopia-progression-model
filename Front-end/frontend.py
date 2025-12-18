import streamlit as st
def configure_page() -> None:
    st.set_page_config(page_title="Myopia Progression Model", layout="wide")


st.title("Myopia Progression Model")

age = st.slider("Age", 5,35,65)
screen_time = st.slider("Screen time (hours/day)", 1,24)
outdoor_time = st.slider("Outdoor time (hours/day)", 1, 24)
prescription = st.slider("Prescription", -10.00,10.00,step=0.25)
