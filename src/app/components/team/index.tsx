
import firstImage from "../../../assets/firstImage.png";

const members = [
    {
        photo : '',
        name: 'nome do dev',
        role: 'desenvolvedor fornt-end',
        technologies: 'React, Angular, Flutter'
    },
    {
        photo : '',
        name: 'nome do dev',
        role: 'desenvolvedor fornt-end',
        technologies: 'React, Angular, Flutter'
    },
    {
        photo : '',
        name: 'nome do dev',
        role: 'desenvolvedor fornt-end',
        technologies: 'React, Angular, Flutter'
    },
    {
        photo : '',
        name: 'nome do dev',
        role: 'desenvolvedor fornt-end',
        technologies: 'React, Angular, Flutter'
    },
    {
        photo : '',
        name: 'nome do dev',
        role: 'desenvolvedor fornt-end',
        technologies: 'React, Angular, Flutter'
    },
    {
        photo : '',
        name: 'nome do dev',
        role: 'desenvolvedor fornt-end',
        technologies: 'React, Angular, Flutter'
    },
    {
        photo : '',
        name: 'nome do dev',
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
                        <img src={firstImage} alt={member.name} className="w-[200px] h-[200px] shadow-ORANGE shadow-md object-cover rounded-full" />
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