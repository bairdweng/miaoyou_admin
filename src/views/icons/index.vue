<template>
  <div class="icons-container">
    <!-- {{ tableData }} -->
    <el-table
      :data="tableData"
      style="width: 100%"
    >
      <el-table-column
        prop="app_name"
        label="app名称"
      />
      <el-table-column label="是否闪退" width="80">
        <template slot-scope="scope">
          <div slot="reference" class="name-wrapper">
            <el-tag size="medium">{{ scope.row.is_crash }}</el-tag>
          </div>
        </template>
      </el-table-column>
      <el-table-column
        prop="status"
        label="状态"
      />
    </el-table>
  </div>
</template>

<script>
import clipboard from '@/utils/clipboard'
import svgIcons from './svg-icons'
import elementIcons from './element-icons'
import { getAppInfos } from '@/api/app'

export default {
  name: 'Icons',
  data() {
    return {
      svgIcons,
      elementIcons,
      tableData: []
    }
  },
  mounted() {
    getAppInfos().then(ret => {
      this.tableData = ret
    })
  },
  methods: {
    generateIconCode(symbol) {
      return `<svg-icon icon-class="${symbol}" />`
    },
    generateElementIconCode(symbol) {
      return `<i class="el-icon-${symbol}" />`
    },
    handleClipboard(text, event) {
      clipboard(text, event)
    }
  }
}
</script>

<style lang="scss" scoped>
.icons-container {
  margin: 10px 20px 0;
  overflow: hidden;

  .grid {
    position: relative;
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(120px, 1fr));
  }

  .icon-item {
    margin: 20px;
    height: 85px;
    text-align: center;
    width: 100px;
    float: left;
    font-size: 30px;
    color: #24292e;
    cursor: pointer;
  }

  span {
    display: block;
    font-size: 16px;
    margin-top: 10px;
  }

  .disabled {
    pointer-events: none;
  }
}
</style>
