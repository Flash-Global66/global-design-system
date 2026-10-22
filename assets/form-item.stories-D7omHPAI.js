import{r as c,E as u}from"./iframe-DGhAAsLo.js";import{K as m,U as p}from"./index-DO-xVdFd.js";import{Y as g}from"./index-DIb-Yeml.js";import{Z as h}from"./index-CAgbDQEE.js";import{c as f}from"./index-Dt1btpyV.js";import{G as v}from"./ConfigProvider-Birp5-9E.js";import"./preload-helper-Dch09mLN.js";import"./useId-DhtRqCtI.js";import"./useEmptyValues-BnoaI-qx.js";import"./install.util-cBz1HN_T.js";import"./index-C1uc_0YT.js";import"./index-DuHyJ7eG.js";import"./index-i3VUHDih.js";import"./useAttrs-B4n5yeal.js";import"./event.constant-LtAI3-H4.js";import"./useCalcInputWidth-D_DQH6u2.js";import"./useLocale-DXWME7Rq.js";import"./index-td18ySSs.js";import"./index-9musjaA9.js";import"./index-DNdH2Gds.js";import"./index-dk_uU8GQ.js";import"./index-lVxfDAOs.js";import"./debounce-DJ-6Hut1.js";import"./isEqual-Dg-2dUCj.js";import"./hasIn-B2al4vRA.js";import"./Skeleton-Dax08GcO.js";import"./_plugin-vue_export-helper-DlAUqK2U.js";import"./clickOutside.directive-DS17jU7a.js";const T={title:"Form/Form/Item",component:m,tags:["autodocs"],parameters:{docs:{description:{component:`
El componente \`GFormItem\` es un contenedor para elementos de formulario que controla los errores de validación y muestra mensajes de error cuando es necesario.

### Características
> - Control de errores de validación
> - Mensajes de error personalizables
> - Integración con Form padre
> - Estados de validación
> - Reseteo individual de campos
> - Soporte para reglas específicas

### Instalación

\`\`\`bash
yarn add @flash-global66/g-form
\`\`\`

### Importación

\`\`\`typescript
import { GFormItem } from '@flash-global66/g-form'
import '@flash-global66/g-form/form.styles.scss'
\`\`\`

### Dependencias
Este componente está diseñado para funcionar dentro de un componente \`Form\`. Para ver la documentación completa del sistema de formularios, visita la [documentación de Form](/docs/form-form--docs).`}}},argTypes:{prop:{description:"Nombre del campo en el modelo de datos",control:"text",table:{type:{summary:"string | string[]"}}},rules:{description:"Reglas de validación específicas para este campo",control:"object",table:{type:{summary:"FormItemRule | FormItemRule[]"}}},showMessage:{description:"Controla dónde se muestran los mensajes de error",control:"select",options:["parent","child","none"],table:{type:{summary:'"parent" | "child" | "none"'},defaultValue:{summary:'"child"'}}},validateMessage:{description:"Mensaje de validación actual",table:{category:"Expuesto",type:{summary:"string"}}},shouldShowError:{description:"Indica si se debe mostrar el error en el form item",table:{category:"Expuesto",type:{summary:"boolean"}}},shouldShowErrorChild:{description:"Indica si se debe mostrar el error en el componente hijo",table:{category:"Expuesto",type:{summary:"boolean"}}},validateState:{description:"Estado actual de la validación",table:{category:"Expuesto",type:{summary:"string"}}},validate:{description:"Método para validar el form item",table:{category:"Expuesto",type:{summary:"() => Promise<void>"}}},clearValidate:{description:"Elimina el estado de validación del campo",table:{category:"Expuesto",type:{summary:"() => void"}}},resetField:{description:"Reinicia el campo actual y elimina el resultado de la validación",table:{category:"Expuesto",type:{summary:"() => void"}}}}},o={name:"Combinación de Reglas",parameters:{docs:{description:{story:`Las reglas de validación pueden definirse tanto en el Form padre como en el FormItem individual.
        
#### Validación por eventos
El atributo \`validate-event\` controla si el componente de entrada dispara la validación automáticamente en eventos como 'change' o 'blur'.
- Cuando \`validate-event="false"\`: La validación solo ocurrirá al llamar manualmente al método validate().
- Cuando \`validate-event="true"\` (por defecto): La validación se dispara automáticamente en eventos de entrada.`}}},render:e=>({components:{GForm:p,GFormItem:m,GInput:g,GConfigProvider:v,GButton:f,GSelect:h},setup(){const r=c(),t=u({nombre:"",apellido:"",edad:"",ciudad:""}),s={nombre:[{required:!0,message:"El nombre es requerido",trigger:"blur"},{min:5,message:"Mínimo 5 caracteres",trigger:"blur"}],apellido:[{required:!0,message:"El apellido es requerido",trigger:"blur"}],ciudad:[{required:!0,message:"La ciudad es requerida"}]},l=[{value:"Bogotá",title:"Bogotá"},{value:"Medellín",title:"Medellín"},{value:"Cali",title:"Cali"},{value:"Barranquilla",title:"Barranquilla"}];async function i(){r.value&&await r.value.validate((b,d)=>{console.log(b?"submit!":"error submit!",d)})}async function a(){r.value&&r.value.resetFields()}return{args:e,formRef:r,formData:t,rules:s,handleSubmit:i,handleReset:a,options:l}},template:`
      <g-config-provider>
        <g-form ref="formRef" :model="formData" :rules="rules" class="flex flex-col gap-4">
          <g-form-item prop="nombre" :show-message="args.showMessage">
            <g-input 
              v-model="formData.nombre" 
              label="Nombre"
              placeholder="Ingrese su nombre"
              help-text="Mínimo 5 caracteres"
              :validate-event="false"
            />
          </g-form-item>
          <g-form-item prop="apellido" :show-message="args.showMessage">
            <g-input 
              v-model="formData.apellido" 
              label="Apellido"
              placeholder="Ingrese su apellido"
              help-text="Campo requerido"
            />
          </g-form-item>

          <g-form-item prop="ciudad" :show-message="args.showMessage">
            <g-select
              v-model="formData.ciudad"
              label="Ciudad"
              placeholder="Seleccione una ciudad"
              :options="options"
              help-text="Campo requerido"
            />
          </g-form-item>

          <g-form-item 
            prop="edad"
            :show-message="args.showMessage"
            :rules="[
              { required: true, message: 'La edad es requerida' },
              { 
                validator: (rule, value, callback) => {
                  if (!value) {
                    callback(new Error('Ingrese una edad'));
                  } else if (Number(value) < 18) {
                    callback(new Error('Debe ser mayor de edad'));
                  } else {
                    callback();
                  }
                }
              }
            ]"
          >
            <g-input 
              v-model="formData.edad" 
              label="Edad"
              placeholder="Ingrese su edad"
              help-text="Debe ser mayor de 18 años"
            />
          </g-form-item>

          <div class="flex gap-4 mt-4">
            <g-button @click="handleSubmit">Enviar</g-button>
            <g-button @click="handleReset" variant="secondary">Resetear</g-button>
          </div>
        </g-form>
      </g-config-provider>
    `})},n={name:"Mensajes de Error",parameters:{docs:{description:{story:'Demostración de las diferentes formas de mostrar mensajes de error:\n        \n- `showMessage="child"`: El error se muestra en el componente hijo (Input, Select, etc). Este es el valor predeterminado.\n- `showMessage="parent"`: El error se muestra en el FormItem.\n- `showMessage="none"`: No se muestra ningún mensaje de error.'}}},render:()=>({components:{GForm:p,GFormItem:m,GInput:g,GConfigProvider:v,GButton:f},setup(){const e=c(),r=u({campo1:"",campo2:"",campo3:""}),t={campo1:[{required:!0,message:"Este campo es requerido",trigger:"blur"}],campo2:[{required:!0,message:"Este campo es requerido",trigger:"blur"}],campo3:[{required:!0,message:"Este campo es requerido",trigger:"blur"}]};async function s(){e.value&&await e.value.validate((i,a)=>{console.log(i?"submit!":"error submit!",a)})}async function l(){e.value&&e.value.resetFields()}return{formRef:e,formData:r,rules:t,handleSubmit:s,handleReset:l}},template:`
      <g-config-provider>
        <g-form ref="formRef" :model="formData" :rules="rules" class="flex flex-col gap-4">
          <g-form-item 
            prop="campo1"
            showMessage="child"
          >
            <g-input 
              v-model="formData.campo1"
              label="Error en Input (child)"
              placeholder="Error se muestra en el input"
            />
          </g-form-item>

          <g-form-item 
            prop="campo2"
            showMessage="parent"
          >
            <g-input 
              v-model="formData.campo2"
              label="Error en FormItem (parent)"
              placeholder="Error se muestra debajo"
            />
          </g-form-item>

          <g-form-item 
            prop="campo3"
            showMessage="none"
          >
            <g-input 
              v-model="formData.campo3"
              label="Sin mensaje de error (none)"
              placeholder="No se muestra ningún error"
            />
          </g-form-item>

          <div style="flex gap-4 mt-4">
            <g-button @click="handleSubmit">Validar</g-button>
            <g-button @click="handleReset" variant="secondary" style="margin-left: 10px">Resetear</g-button>
          </div>
        </g-form>
      </g-config-provider>
    `})},H=["CombinedRules","MessageBehavior"];o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  name: 'Combinación de Reglas',
  parameters: {
    docs: {
      description: {
        story: \`Las reglas de validación pueden definirse tanto en el Form padre como en el FormItem individual.
        
#### Validación por eventos
El atributo \\\`validate-event\\\` controla si el componente de entrada dispara la validación automáticamente en eventos como 'change' o 'blur'.
- Cuando \\\`validate-event="false"\\\`: La validación solo ocurrirá al llamar manualmente al método validate().
- Cuando \\\`validate-event="true"\\\` (por defecto): La validación se dispara automáticamente en eventos de entrada.\`
      }
    }
  },
  render: args => ({
    components: {
      GForm,
      GFormItem,
      GInput,
      GConfigProvider,
      GButton,
      GSelect
    },
    setup() {
      const formRef = ref();
      const formData = reactive({
        nombre: '',
        apellido: '',
        edad: '',
        ciudad: ''
      });
      const rules = {
        nombre: [{
          required: true,
          message: 'El nombre es requerido',
          trigger: 'blur'
        }, {
          min: 5,
          message: 'Mínimo 5 caracteres',
          trigger: 'blur'
        }],
        apellido: [{
          required: true,
          message: 'El apellido es requerido',
          trigger: 'blur'
        }],
        ciudad: [{
          required: true,
          message: 'La ciudad es requerida'
        }]
      };
      const options = [{
        value: 'Bogotá',
        title: 'Bogotá'
      }, {
        value: 'Medellín',
        title: 'Medellín'
      }, {
        value: 'Cali',
        title: 'Cali'
      }, {
        value: 'Barranquilla',
        title: 'Barranquilla'
      }];
      async function handleSubmit() {
        if (!formRef.value) return;
        await formRef.value.validate((valid, fields) => {
          if (valid) {
            console.log('submit!', fields);
          } else {
            console.log('error submit!', fields);
          }
        });
      }
      async function handleReset() {
        if (!formRef.value) return;
        formRef.value.resetFields();
      }
      return {
        args,
        formRef,
        formData,
        rules,
        handleSubmit,
        handleReset,
        options
      };
    },
    template: \`
      <g-config-provider>
        <g-form ref="formRef" :model="formData" :rules="rules" class="flex flex-col gap-4">
          <g-form-item prop="nombre" :show-message="args.showMessage">
            <g-input 
              v-model="formData.nombre" 
              label="Nombre"
              placeholder="Ingrese su nombre"
              help-text="Mínimo 5 caracteres"
              :validate-event="false"
            />
          </g-form-item>
          <g-form-item prop="apellido" :show-message="args.showMessage">
            <g-input 
              v-model="formData.apellido" 
              label="Apellido"
              placeholder="Ingrese su apellido"
              help-text="Campo requerido"
            />
          </g-form-item>

          <g-form-item prop="ciudad" :show-message="args.showMessage">
            <g-select
              v-model="formData.ciudad"
              label="Ciudad"
              placeholder="Seleccione una ciudad"
              :options="options"
              help-text="Campo requerido"
            />
          </g-form-item>

          <g-form-item 
            prop="edad"
            :show-message="args.showMessage"
            :rules="[
              { required: true, message: 'La edad es requerida' },
              { 
                validator: (rule, value, callback) => {
                  if (!value) {
                    callback(new Error('Ingrese una edad'));
                  } else if (Number(value) < 18) {
                    callback(new Error('Debe ser mayor de edad'));
                  } else {
                    callback();
                  }
                }
              }
            ]"
          >
            <g-input 
              v-model="formData.edad" 
              label="Edad"
              placeholder="Ingrese su edad"
              help-text="Debe ser mayor de 18 años"
            />
          </g-form-item>

          <div class="flex gap-4 mt-4">
            <g-button @click="handleSubmit">Enviar</g-button>
            <g-button @click="handleReset" variant="secondary">Resetear</g-button>
          </div>
        </g-form>
      </g-config-provider>
    \`
  })
}`,...o.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  name: 'Mensajes de Error',
  parameters: {
    docs: {
      description: {
        story: \`Demostración de las diferentes formas de mostrar mensajes de error:
        
- \\\`showMessage="child"\\\`: El error se muestra en el componente hijo (Input, Select, etc). Este es el valor predeterminado.
- \\\`showMessage="parent"\\\`: El error se muestra en el FormItem.
- \\\`showMessage="none"\\\`: No se muestra ningún mensaje de error.\`
      }
    }
  },
  render: () => ({
    components: {
      GForm,
      GFormItem,
      GInput,
      GConfigProvider,
      GButton
    },
    setup() {
      const formRef = ref();
      const formData = reactive({
        campo1: '',
        campo2: '',
        campo3: ''
      });
      const rules = {
        campo1: [{
          required: true,
          message: 'Este campo es requerido',
          trigger: 'blur'
        }],
        campo2: [{
          required: true,
          message: 'Este campo es requerido',
          trigger: 'blur'
        }],
        campo3: [{
          required: true,
          message: 'Este campo es requerido',
          trigger: 'blur'
        }]
      };
      async function handleSubmit() {
        if (!formRef.value) return;
        await formRef.value.validate((valid, fields) => {
          if (valid) {
            console.log('submit!', fields);
          } else {
            console.log('error submit!', fields);
          }
        });
      }
      async function handleReset() {
        if (!formRef.value) return;
        formRef.value.resetFields();
      }
      return {
        formRef,
        formData,
        rules,
        handleSubmit,
        handleReset
      };
    },
    template: \`
      <g-config-provider>
        <g-form ref="formRef" :model="formData" :rules="rules" class="flex flex-col gap-4">
          <g-form-item 
            prop="campo1"
            showMessage="child"
          >
            <g-input 
              v-model="formData.campo1"
              label="Error en Input (child)"
              placeholder="Error se muestra en el input"
            />
          </g-form-item>

          <g-form-item 
            prop="campo2"
            showMessage="parent"
          >
            <g-input 
              v-model="formData.campo2"
              label="Error en FormItem (parent)"
              placeholder="Error se muestra debajo"
            />
          </g-form-item>

          <g-form-item 
            prop="campo3"
            showMessage="none"
          >
            <g-input 
              v-model="formData.campo3"
              label="Sin mensaje de error (none)"
              placeholder="No se muestra ningún error"
            />
          </g-form-item>

          <div style="flex gap-4 mt-4">
            <g-button @click="handleSubmit">Validar</g-button>
            <g-button @click="handleReset" variant="secondary" style="margin-left: 10px">Resetear</g-button>
          </div>
        </g-form>
      </g-config-provider>
    \`
  })
}`,...n.parameters?.docs?.source}}};export{o as CombinedRules,n as MessageBehavior,H as __namedExportsOrder,T as default};
