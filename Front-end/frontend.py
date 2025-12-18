import streamlit as st
def configure_page() -> None:
    st.set_page_config(page_title="Myopia Progression Model", layout="wide")

#Title and user info
st.title("Myopia Progression Model")
name = st.text_input("Enter your name")
sex = st.radio("Select sex", ["Male", "Female", "Other"])
age = st.slider("Age", 1,109)
screen_time = st.slider("Screen time (hours/day)", 1,24)


#Prescription details
odright = st.number_input("Enter your OD(Right eye) prescription", step = 0.25)
osleft = st.number_input("Enter your OS(Left eye prescription)", step = 0.25)
cylinder = st.number_input("Cylinder",min_value = -12.00, max_value = 0.00,step = 0.25 )
axis = st.number_input("Axis (0–180°)", min_value = 0, max_value=180, step=1)
sphere = st.number_input("Sphere", min_value = -30.00, max_value = 20.00, step = 0.25)
conditions = st.text_input("Enter conditions")


#submit button
submit = st.button("Submit")
