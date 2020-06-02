<template>
  <div class="software">
    <div class="formodal">
      <v-dialog v-model="dialog" max-width="800px">
        <v-btn color="primary" dark slot="activator" class="mb-2">New software</v-btn>
        <v-card>
          <v-card-title>
            <span class="headline">{{ formTitle }}</span>
          </v-card-title>
          <v-card-text>
            <v-container grid-list-md>
              <v-layout wrap>
                <v-flex xs12 sm6 md4>
                  <v-text-field label="Title" v-model="editedItem.titleSoft"></v-text-field>
                </v-flex>
                <v-flex xs12 sm6 md4>
                  <v-text-field label="Content" v-model="editedItem.contentSoft"></v-text-field>
                </v-flex>
                <v-flex xs12 sm6 md4>
                  <v-text-field label="Excerpt" v-model="editedItem.excerptSoft"></v-text-field>
                </v-flex>
                <v-flex xs12 sm6 md4>
                  <v-text-field label="type" v-model="editedItem.typeSoft"></v-text-field>
                </v-flex>
              </v-layout>
            </v-container>
          </v-card-text>
          <v-card-actions>
            <v-spacer></v-spacer>
            <v-btn color="blue darken-1" flat @click.native="close">Cancel</v-btn>
            <v-btn color="blue darken-1" flat @click.native="save">Save</v-btn>
          </v-card-actions>
        </v-card>
      </v-dialog>
    </div>
    <v-data-table
        :headers="headers"
        :items="software"
        class="elevation-1"
    >
      <template slot="items" slot-scope="props">
        <td class="text-xs-left">{{ props.item.titleSoft }}</td>
        <td class="text-xs-left">{{ props.item.contentSoft }}</td>
        <td class="text-xs-left">{{ props.item.excerptSoft }}</td>
        <td class="text-xs-left">{{ props.item.typeSoft }}</td>
        <td class="justify-center layout px-0">
          <v-btn icon class="mx-0" @click="editItem(props.item)">
            <v-icon color="teal">edit</v-icon>
          </v-btn>
          <v-btn icon class="mx-0" @click="deleteSoftware(props.item)">
            <v-icon color="pink">delete</v-icon>
          </v-btn>
        </td>
      </template>
      <template slot="no-data">
        <v-btn color="primary" @click="getSoftware">Reset</v-btn>
      </template>
    </v-data-table>
  </div>
</template>

<script>
  import apiService from '@/Services/ApiService'
  export default {
    name: 'software',
    data () {
      return {
        software: [],
        dialog: false,
        editedIndex: -1,
        editedItem: {
          titleSoft: '',
          contentSoft: '',
          excerptSoft: '',
          typeSoft: ''
        },
        headers: [
          {
            text: 'Title software',
            align: 'left',
            sortable: true,
            value: 'titleSoft'
          },
          {
            text: 'Content software',
            align: 'left',
            sortable: true,
            value: 'contentSoft'
          },
          {
            text: 'Excerpt software',
            align: 'left',
            sortable: false,
            value: 'excerptSoft'
          },
          {
            text: 'Type software',
            align: 'left',
            sortable: false,
            value: 'typeSoft'
          },
          { text: 'Actions', value: 'contentSoft', sortable: false }
        ]
      }
    },
    mounted () {
      this.getSoftware()
    },
    computed: {
      formTitle () {
        return this.editedIndex === -1 ? 'New Item' : 'Edit Item'
      }
    },
    watch: {
      dialog (val) {
        val || this.close()
      }
    },
    methods: {
      async getSoftware () {
        // const response = await apiService.fetchSofware()// todo backend
        const response = {
          data: [
            {
              titleSoft: 'ComparaSofware',
              contentSoft: 'content Example',
              excerptSoft: 'excerpt example',
              typeSoft: 'tecnology'
            },
            {
              titleSoft: 'Dtyy sw',
              contentSoft: 'content Example',
              excerptSoft: 'excerpt example',
              typeSoft: 'tecnology'
            },
            {
              titleSoft: 'pm Sdr',
              contentSoft: 'content Example',
              excerptSoft: 'excerpt example',
              typeSoft: 'tecnology'
            }
          ]
        }
        this.software = response.data
      },

      async save () {
        try {
          if (this.editedIndex === -1) {
            await apiService.addSoftware(this.editedItem)
            this.software.push(this.editedItem)
          } else {
            await apiService.updateSoftware(this.editedItem)
            Object.assign(this.software[this.editedIndex], this.editedItem)
          }
        } catch (err) {
          return console.log(err.message)
        } finally {
          this.close()
        }
      },

      async deleteSoftware (software) {
        const $this = this
        $this.$swal({
          title: 'Are you sure?',
          text: "You won't be able to revert this!",
          type: 'warning',
          showCancelButton: true,
          confirmButtonText: 'Yes, delete it!'
        }).then((result) => {
          if (result.value) {
            apiService.deleteSoftware(software.titleSoft)
            const index = this.software.indexOf(software)
            this.software.splice(index, 1)
          }
        })
      },

      editItem (item) {
        this.editedIndex = this.software.indexOf(item)
        this.editedItem = Object.assign({}, item)
        this.dialog = true
      },

      close () {
        this.dialog = false
        setTimeout(() => {
          this.editedItem = Object.assign({}, this.defaultItem)
          this.editedIndex = -1
        }, 300)
      }
    }
  }
</script>

<style>

</style>
