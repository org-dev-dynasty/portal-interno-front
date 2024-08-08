
import firstImage from "../../../assets/firstImage.png";

const members = [
    {
        photo : 'https://avatars.githubusercontent.com/u/89361851?v=4',
        name: 'Gabriel Merola',
        role: 'desenvolvedor fornt-end',
        technologies: 'React, Angular, Flutter'
    },
    {
        photo : 'https://avatars.githubusercontent.com/u/100361837?v=4',
        name: 'Rodrigo Siqueira',
        role: 'desenvolvedor fornt-end',
        technologies: 'React, Angular, Flutter'
    },
    {
        photo : 'https://avatars.githubusercontent.com/u/131803879?v=4',
        name: 'Marcelo Zoletti',
        role: 'desenvolvedor fornt-end',
        technologies: 'React, Angular, Flutter'
    },
    {
        photo : 'https://avatars.githubusercontent.com/u/132511426?v=4',
        name: 'Isaias',
        role: 'desenvolvedor fornt-end',
        technologies: 'React, Angular, Flutter'
    },
    {
        photo : 'https://avatars.githubusercontent.com/u/133998521?v=4',
        name: 'João Galhardo',
        role: 'desenvolvedor fornt-end',
        technologies: 'React, Angular, Flutter'
    },
    {
        photo : 'https://avatars.githubusercontent.com/u/135128962?v=4',
        name: 'Breno Coutinho Rodrigues',
        role: 'desenvolvedor fornt-end',
        technologies: 'React, Angular, Flutter'
    },
    {
        photo : 'https://avatars.githubusercontent.com/u/137533443?s=400&u=0efea3b4a507cca23808ca58819a66acd8e240aa&v=4',
        name: 'Tiago Tokugi de Albuquerque Massuda',
        role: 'desenvolvedor fornt-end',
        technologies: 'React, Angular, Flutter'
    },
    {
        photo : '',
        name: 'nome do dev',
        role: 'desenvolvedor fornt-end',
        technologies: 'React, Angular, Flutter'
    },
]


export default function Team() {
    const memberTemplate = (member: { photo: string, name: string, role: string, technologies: string }) => {
        return (
            <>
                <div className='flex w-[400px] justify-center flex-col my-10'>
                    <div className="flex justify-center">
                        <img src={member.photo} alt={member.name} className="w-[200px] h-[200px] shadow-ORANGE shadow-md object-cover rounded-full" />
                    </div>
                    <div className='w-[100%] text-center mt-4'>
                        <p className="text-2xl text-white">{member.name}</p>
                        <p className="text-l text-white">{member.role}</p>
                        <p className="text-l text-white">{member.technologies}</p>
                    </div>
                </div>
            </>
        )
    }

    return (
        <div className="flex justify-center flex-wrap">
            {members.map((member, index) => (
                <div key={index}>
                    {memberTemplate(member)}
                </div>
            ))}
        </div>
    )
}