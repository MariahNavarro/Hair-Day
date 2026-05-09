import {  schedulesDay } from "./load.js"
import { scheduleCancel } from "../../services/schedule-cancel.js"

const periods = document.querySelectorAll('.period');

// Gera evento click para cada lista (manhã, tarde e noite).
periods.forEach((period) => {
    period.addEventListener("click", async (event) => {
    if (event.target.classList.contains("cancel-icon")) {
        // Obtém a li pai de  elemento clicado.
         const item = event.target.closest("li")

         // Pega o id do aagendamento para remover.
         const { id } = item.dataset
        
        // Confirma que o id foi selecionado.
        if (id) {
            // Confirma se o usuario quer cancelar.
            const isConfirm = confirm("Deseja cancelar o agendamento?")
            
            if (isConfirm){
                // Faz requisição na API para cancelar.
                await scheduleCancel({ id })

                // Recarrega os agendamentos.
                schedulesDay()
            }
        }    
    }})
})