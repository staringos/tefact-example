<template>
  <div class="hello">
    <div>
      <Editor
          :value="target"
          :editorSetting="settings"
          @addTarget="handleAddTarget"
          @editTarget="handleEditTarget"
          @share="handleShare"
          @shareCancel="handleShareCancel"
          @save="handleSave"
          @back="handleGoBack"
          @openModifier="handleOpenModifier"
      ></Editor>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import Editor, { getDefaultFeature } from "@tefact/editor"

export default Vue.extend({
  name: "HelloWorld",
  data() {
    return {
      target: getDefaultFeature("page"),
      settings: {
        app: {
          id: (new Date).getTime(),
          type: "normal"
        },
        appType: "normal",
        device: 'pc',
        uploadUrl: "",
        formList: [],
        datasetList: [],

        // target
        onShare: () => {},
        onPublish: () => {},
        getTargetByIdHandler: () => {},
        onGetTargetList: () => {},
      }
    }
  },
  props: {
    msg: String,
  },
  components: {
    Editor
  },
  methods: {
    handleAddTarget() {},
    handleEditTarget() {},
    handleShare() {},
    handleShareCancel() {},
    handleSave() {},
    handleGoBack() {},
    handleOpenModifier() {},
  }
});
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
