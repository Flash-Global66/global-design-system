import { StoryFn, Meta } from "@storybook/vue3";
import { ref } from "vue";
import { GTable } from '../components/table';
import { GTableColumn } from '../components/table';
import { GConfigProvider } from '../components/config-provider';

export default {
  title: 'Data/Table',
  component: GTable,
} as Meta<typeof GTable>;

const Template: StoryFn<typeof GTable> = (args) => ({
  components: { GTable, GTableColumn, GConfigProvider },
  template: `
    <g-config-provider>
      <g-table
        :data="tableData"
        :default-sort="{ prop: 'name', order: 'descending' }"

        height="350"
        stripe
        style="width: 100%">
        <g-table-column fixed type="selection" width="55" />
        <g-table-column type="index" width="50" />
        <g-table-column prop="name" label="Name" width="180" sortable />
        <g-table-column prop="lastname" label="Last name" width="180" />
        <g-table-column prop="date" label="Date" width="220" sortable>
          <template #default="{ row, column, $index }">
            {{ row.date }}
          </template>
        </g-table-column>
        <g-table-column prop="email" label="Email" width="220" />
        <g-table-column prop="address" label="Address" width="180" />
        <g-table-column prop="cellphone" label="Cellphone" width="180" />
        <g-table-column prop="country" label="Country" width="180" />
      </g-table>
    </g-config-provider>
  `,
  setup() {
    interface Person {
      date: string;
      name: string;
      lastname: string;
      email: string;
      address: string;
      cellphone: string;
      country: string;
    }
    const tableData = ref<Person[]>([])

    function setData() {

      for (let i = 0; i < 10; i++) {
        const dateStart = new Date('1994-11-01').getTime();
        const dateEnd = new Date().getTime();
        let currentDate = new Date(dateStart + Math.random() * (dateEnd - dateStart));
        let date = currentDate.toLocaleDateString(
          'en-EN',
          {
            year: 'numeric',
            day: '2-digit',
            month: 'short',
            hour: 'numeric',
            minute: 'numeric',
            hour12: false
          }
        );

        let obj: Person = {
          date,
          name: "nombre" + i,
          lastname: "apellido" + i,
          email: "email" + i + "@ejemplo.com",
          address: "dirección" + i,
          cellphone: "123-456-789" + i,
          country: "país" + i
        };

        tableData.value.push(obj);
      }
    }
    setData();

    return { args, tableData };
  }
});

export const Default = Template.bind({});
Default.args = {
  text: 'JA'
};