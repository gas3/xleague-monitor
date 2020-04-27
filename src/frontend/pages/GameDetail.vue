<template>
  <div id="users-table">
    <GoBack />
    <v-client-table ref="myTable" :data="tableData" :columns="columns" :options="options"></v-client-table>
<!-- 
    <h2>{{ games }}</h2> -->
  </div>
</template>

<script>
import GoBack from "../components/GoBack.vue";

export default {
  name: "Home",
  components: {
    GoBack
  },
  props: {
    games: Array
  },
  data() {
    return {
      columns: [
        "AppVersion",
        "BonusScore",
        "DeviceModel",
        "EntryCash",
        "EntryPoints",
        "FinalSocre",
        "MatchName",
        "TimeStamp",
        "TotalScore"
      ],
      options: {
        filterByColumn: true,
        filterable: [
          "AppVersion",
          "BonusScore",
          "DeviceModel",
          "EntryCash",
          "EntryPoints",
          "FinalSocre",
          "MatchName",
          "TimeStamp",
          "TotalScore"
        ],

        dateColumns: ["TimeStamp"],
        dateFormat: "DD/MM/YYYY HH:mm:ss",
        // toMomentFormat: true,

        datepickerOptions: {
          //See http://www.daterangepicker.com/#options
          showDropdowns: true,
          autoUpdateInput: true
        },

        listColumns: {},
        sortable: [
          "AppVersion",
          "BonusScore",
          "DeviceModel",
          "EntryCash",
          "EntryPoints",
          "FinalSocre",
          "MatchName",
          "TimeStamp",
          "TotalScore"
        ],
        headings: {
          AppVersion: "App Version",
          BonusScore: "Bonus Score",
          DeviceModel: "Device",
          EntryCash: "Entry Cash",
          EntryPoint: "Entry Point",
          FinalSocre: "Final Score",
          MatchName: "Match Name",
          TimeStamp: "Date",
          TotalScore: "Total Score"
        },

        pagination: {
          show: false
        },
        perPage: 65535,
        perPageValues: []
      }
    };
  },

  computed: {
    tableData: function() {
      const tableData = [];
      this.games.forEach(game => {
        // debugger

        tableData.push({
          ...game,
          TimeStamp: moment(game.TimeStamp)
        });
      });

      return tableData;
    }
  },

  methods: {}
};
</script>

<style scoped>
@import "../../../node_modules/daterangepicker/daterangepicker.css";
@import url("https://maxcdn.bootstrapcdn.com/bootstrap/3.3.6/css/bootstrap.min.css");

.VueTables__date-filter {
  border: 1px solid #ccc;
  padding: 6px;
  border-radius: 4px;
  cursor: pointer;
}

#users-table {
  background: white;
  padding: 20px;
}

#users-table >>> input:focus {
  color: black;
}

a {
  display: block;
  text-align: center;
  padding: 10px;
}

a:hover {
  cursor: pointer;
}

#users-table >>> td {
  text-align: center !important;
}
</style>

<style>
.daterangepicker select {
  background-color: white !important;
}
</style>
