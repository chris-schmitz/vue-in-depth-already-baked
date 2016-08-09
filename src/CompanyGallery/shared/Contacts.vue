<script>
    import State from './State'
    module.exports = {
        data: () => {
            return {
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
            let company = State.getCompanyById(this.$route.params.id)
            if(Object.getOwnPropertyNames(company).length === 0){
                this.contacts.push(State.getNullContact())
            } else {
                this.contacts = company.contacts
            }
        },
        methods:{
            create(){
                this.contacts.push(State.getNullContact())
            },
            delete(contact){
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
                <tr v-if="displayMode === 'review'" v-for="contact in contacts">
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
                        <button v-if="editOrCreate" class="btn btn-danger" @click="delete(contact)"><i class="fa fa-trash"></i></button>
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

        .panel-heading{
            display:flex;
            justify-content:center;
        }

        table{
            width: 100%;

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