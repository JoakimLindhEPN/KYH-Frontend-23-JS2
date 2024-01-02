import { Contact } from "./Contact"

export const ContactList = () => {

  const contacts = [
    {
      id: '1',
      name: "Hans Mattin-Lassei",
      email: "hans@domain.com"
    },
    {
      id: '2',
      name: "Tommy Mattin-Lassei",
      email: "tommy@domain.com"
    },
    {
      id: '3',
      name: "Jeanette Wankowicz",
      email: "jeanette@domain.com"
    },
  ]

  return (
    <div>
      <Contact id={contacts[0].id} name={contacts[0].name} email={contacts[0].email}/>
      <Contact id="2" name="Tommy Mattin-Lassei" email="tommy@domain.com" />
      <Contact id="3" name="Jeanette Wankowicz" email="jeanette@domain.com" />
    </div>
  )
}
