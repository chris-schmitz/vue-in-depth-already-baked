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
            }
        },
        ready(){
            let company = State.getCompanyById(this.$route.params.id)
            if(Object.getOwnPropertyNames(company).length === 0){
                this.contacts.push(State.getNullContact())
            } else {
                this.contacts = company.contacts
            }
        }
    }
</script>

<template>
    <div class="contacts-container panel panel-default">
        <div class="panel-heading">
            <h4>Contacts</h4>
        </div>
        <table>
            <tr>
                <th v-if="displayMode === 'edit' || displayMode === 'create' ">Active</th>
                <th>First Name</th>
                <th>Last Name</th>
                <th>Email</th>
            </tr>
            <tr v-if="displayMode === 'review'" v-for="contact in contacts">
                <td>{{ contact.first_name }}</td>
                <td>{{ contact.last_name }}</td>
                <td>
                    <a href="mailto:{{ contact.email }}">{{ contact.email }}</a>
                </td>
            </tr>
            <tr v-if="displayMode === 'edit' || displayMode === 'create'" v-for="contact in contacts">
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
            </tr>
        </table>
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

            tr:first-child{
                background-color: $columnHeader-backgroundColor;
                color: $columnHeader-color;
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