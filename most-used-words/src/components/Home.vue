<template>
  <v-container>
    <v-form>
      <v-file-input
        label="Selecione os Arquivos"
        prepend-icon="mdi-message-text"
        append-outer-icon="mdi-send"
        outlined
        multiple
        chips
        v-model="files"
        @click:append-outer="processSubtitles"
      />
    </v-form>
    <div class="pills">
      <Pill
        v-for="word in groupWords"
        :key="word.name"
        :name="word.name"
        :amount="word.amount"
      />
    </div>
  </v-container>
</template>

<script>
import { ipcRenderer } from 'electron';
import Pill from "./Pill";

export default {
  components: {
    Pill,
  },
  data: function () {
    return {
      files: [],
      groupWords: []
    }
  },
  methods: {
    processSubtitles() {      

      const paths = this.files.map(file => file.path);

      ipcRenderer.send("process-subtitle", paths);
      ipcRenderer.on("process-subtitle", (args, resp) => {
        this.groupWords = resp;
      });
    },
  },
};
</script>

<style>
.pills {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
}
</style>