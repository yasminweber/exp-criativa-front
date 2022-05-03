import React, { Component } from 'react';
import AchievementsCard from './AchievementsCard';

class Achievements extends Component {

    render() {
        return (
            <section>
                <h2 className='section-title'> Minhas Conquistas </h2>
                <h4 className='section-subtitle mt-2'> Aqui você acompanha as conquistas e resgata seus pontos! </h4>

                <hr />

                <div className='container-lg achievements-section'>
                    <div class="row row-cols-1 row-cols-md-3 g-4">
                        <AchievementsCard title="teste1" percentage="100%" content="Para conseguir recuperar esses pontos, teste 1tenha pelo menos um projeto aprovado."/>

                        <AchievementsCard title="teste2" percentage="78%" content="Para conseguir recuperar esses pontos, teste 2 tenha pelo menos um projeto aprovado."/>

                        <AchievementsCard title="teste3" percentage="26%" content="Para conseguir recuperar esses pontos, teste 3 tenha pelo menos um projeto aprovado."/>

                        <AchievementsCard title="teste4" percentage="50%" content="Para conseguir recuperar esses pontos, teste 4 tenha pelo menos um projeto aprovado."/>

                        <AchievementsCard title="teste5" percentage="100%" content="Para conseguir recuperar esses pontos, teste 5 tenha pelo menos um projeto aprovado."/>
                    </div>
                </div>

            </section>

        )
    }
}
export default Achievements