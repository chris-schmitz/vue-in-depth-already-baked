<script>
    import State from './State'
    import CompanyTools from './CompanyTools'

    module.exports = {
        mixins: [CompanyTools],
        data: () => {
            return {
                company: null,
                contacts: []
            }
        },
        computed:{
            displayMode(){
                if(this.$route.name === 'editCompany'){
                    return 'edit'
                } else if(this.$route.name === 'createCompany') {
                    return 'create'
                } else {
                    return 'review'
                }
            },
            editOrCreate(){
                return this.displayMode === 'edit' || this.displayMode === 'create'
            }
        },
        ready(){
            if(this.hasContacts()){
                this.contacts = this.company.contacts
            } else {
                this.contacts.push(State.getNullContact())
            }
        },
        methods:{
            create(){
                this.contacts.push(State.getNullContact())
            },
            remove(contact){
                this.contacts.pop(contact)
            }
        }
    }
</script>

<template>
    <div class="contacts-container panel panel-primary">
        <div class="panel-heading">
            <h4>Contacts</h4>
        </div>
        <table>
            <thead>
                <tr>
                    <th v-if="editOrCreate">Active</th>
                    <th>First Name</th>
                    <th>Last Name</th>
                    <th>Email</th>
                    <th v-if="editOrCreate">actions</th>
                </tr>
            </thead>
            <tbody>
                <tr v-if="displayMode === 'review' && contact.active === true" v-for="contact in contacts">
                    <td>{{ contact.first_name }}</td>
                    <td>{{ contact.last_name }}</td>
                    <td>
                        <a href="mailto:{{ contact.email }}">{{ contact.email }}</a>
                    </td>
                </tr>
                <tr v-if="editOrCreate" v-for="contact in contacts">
                    <td>
                        <input type="checkbox" v-model="contact.active">
                    </td>
                    <td>
                        <input v-model="contact.first_name">
                    </td>
                    <td>
                        <input v-model="contact.last_name">
                    </td>
                    <td>
                        <input v-model="contact.email">
                    </td>
                    <td>
                        <button v-if="editOrCreate" class="btn btn-danger" @click="remove(contact)"><i class="fa fa-trash"></i></button>
                    </td>
                </tr>
            </tbody>
        </table>
        <div v-if="editOrCreate" class="panel-footer clearfix">
            <button class="btn btn-success pull-right" @click="create"><i class="fa fa-plus"></i></button>
        </div>
    </div>
</template>

<style lang="sass">
    $borderColor: gray; // pull in var
    $columnHeader-backgroundColor: gray; // pull in from var
    $columnHeader-color: black;

    .contacts-container{
        position: relative;


        .panel-heading{
            display:flex;
            justify-content:center;
        }


        .panel-footer{
            position: absolute;
            bottom: 0;
            width:100%;
        }

        table{
            width: 100%;
            // This is the hight of the panel footer. We need this here so that when we add a new row
            // to the contacts list, the footer (which we have to anchor to the bottom of the panel because, bootstrap :|)
            // doesn't cover the new row.
            margin-bottom: 57px;

            thead{
                background-color: $columnHeader-backgroundColor;
                color: $columnHeader-color;
            }

            tbody{
                height:100%;
                overflow-x:scroll;
            }

        }

        tr{
            border:1px solid $borderColor;
        }
        th,td{
            padding:5px;
        }
    }
</style>