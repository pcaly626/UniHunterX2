

const formInputs = {
    textInput : {
        label:"",
        placeHolder:"",
        value:"",
        class:"",
        type: "input",
        options: [
            {
                value:"",
                class:"",
            }
        ]
    },
    selectInput:{
        label:"",
        placeHolder:"",
        value:"",
        class:"",
        type: "select",
        options: [
            {
                value:"",
                class:"",
            }
        ]
    }
}

const inputElement ={
    label:"",
    placeHolder:"",
    value:"",
    class:"",
    type: "",
    options: [
        {
            value:"",
            class:"",
        }
    ]
}

const option = [
    {
        value:"",
        class:"",
    }
]

type FormInputs = typeof formInputs;
type SelectInput = typeof formInputs.selectInput;
type TextInput = typeof formInputs.textInput;
export const InputElement = typeof inputElement;
export const OptionElement = typeof option;

