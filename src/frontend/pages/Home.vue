<template>
  <div id="users-table">
    <v-client-table
      ref="myTable"
      :data="tableData"
      :columns="columns"
      :options="options"
      @row-click="onRowClick"
    >
      <template slot="country" slot-scope="props">
        <img style="width:50px;height:50px;" :src="props.row.country" alt />
      </template>
      <template slot="avatar" slot-scope="props">
        <img style="width:50px;height:50px;" :src="props.row.avatar" alt />
      </template>
      <template slot="qtyGames" slot-scope="props">
        <a @click="onQtyGamesClick(props)">{{ props.row.qtyGames }}</a>
      </template>
      <template slot="qtyRefferals" slot-scope="props">
        <a @click="onQtyRefferalsClick">{{ props.row.qtyRefferals }}</a>
      </template>
    </v-client-table>

    <v-dialog />
  </div>
</template>

<script>
import { db } from "../config/db";

export default {
  name: "Home",
  data() {
    return {
      users: [],
      devices: [],
      games: [],
      // tableData: [],

      columns: [
        "country",
        "avatar",
        "screenName",
        "playerId",
        "platform",
        "dateFirstAppeared",
        "dateLastAppeared",
        "qtyGames",
        "qtyRefferals"
      ],
      options: {
        filterByColumn: true,
        filterable: [
          "screenName",
          "playerId",
          "platform",
          "dateFirstAppeared",
          "dateLastAppeared",
          "qtyGames",
          "qtyRefferals"
        ],

        dateColumns: ["dateFirstAppeared"],
        dateFormat: "DD/MM/YYYY HH:mm:ss",
        // toMomentFormat: true,

        datepickerOptions: {
          //See http://www.daterangepicker.com/#options
          showDropdowns: true,
          autoUpdateInput: true
        },

        listColumns: {
          platform: [
            { id: "Android", text: "Android" },
            { id: "iPhone", text: "iPhone" }
            // { id: "unknow", text: "Unknown", hide: true }
          ]
        },
        sortable: [
          "country",
          "screenName",
          "playerId",
          "platform",
          "dateFirstAppeared",
          "dateLastAppeared",
          "qtyGames",
          "qtyRefferals"
        ],
        headings: {
          country: "Country",
          avatar: "Avatar",
          screenName: "Screen Name",
          playerId: "Player ID",
          platform: "Platform",
          dateFirstAppeared: "Date First Appeared",
          dateLastAppeared: "Date Last Appeared",
          qtyGames: "Qty of Games",
          qtyRefferals: "Qty of Referrals"
        },

        pagination: {
          show: false
        },
        perPage: 65535,
        perPageValues: []
      }
    };
  },

  firebase: {
    users: db.ref("v2/users"),
    devices: db.ref("v2/devices"),
    games: db.ref("v2/games")
  },

  computed: {
    tableData: function() {
      const tableData = [];
      this.users.forEach(user => {
        const id = user[".key"];

        let qtyGames = 0;
        if (this.qtyGames && this.qtyGames[id]) {
          qtyGames = this.qtyGames[id];
        }

        let platform = "";
        if (this.platform && this.platform[id]) {
          platform = this.platform[id];
        }

        tableData.push({
          country: user.FlagURL,
          avatar: user.AvatarURL,
          screenName: user.DisplayName,
          playerId: id,
          platform: platform,
          dateFirstAppeared: moment(user.Timestamp),
          dateLastAppeared: "",
          qtyGames: qtyGames,
          qtyRefferals: 0
        });

        // console.log(user);
      });

      return tableData;
    },
    platform: function() {
      const platform = {};
      this.devices.forEach(device => {
        platform[device.PlayerID] = device.DevicePlatform || "";
        platform[device.PlayerID] = platform[device.PlayerID].replace(
          "IPhonePlayer",
          "iPhone"
        );
      });

      return platform;
    },
    qtyGames: function() {
      const qtyGames = {};
      this.games.forEach(game => {
        qtyGames[game.PlayerID] = qtyGames[game.PlayerID]
          ? qtyGames[game.PlayerID] + 1
          : 1;
      });

      return qtyGames;
    }
  },

  methods: {
    onRowClick(e) {
      // console.log(e);
      // debugger;
    },
    onQtyGamesClick(props) {
      const userGames = this.games.filter(item => {
        return item["PlayerID"] == props.row.playerId;
      });

      console.log(userGames)

      this.$router.push({
        name: 'GameDetail',
        params: {
          games: userGames
        },
        hash: '#users-table'
      })

      // const content = JSON.stringify(game).replace("{","").replace("}","").replace(",","<br>")
      // const content = (
      //   <template v-for="(value, name) in game">
      //     {{ name }}: {{ value }}
      //   </template>
      // );

      // let content = "";
      // for (let key in game) {
      //   content += `<p>${key} : ${game[key]}</p>`;
      // }

      // this.$modal.show("dialog", {
      //   title: "Game Details",
      //   text: content
      // });
    },
    onQtyRefferalsClick(e) {
      console.log(e);
    }
  }
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
