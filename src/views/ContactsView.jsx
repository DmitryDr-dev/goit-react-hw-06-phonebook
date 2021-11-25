import Section from '../components/Section';
import Container from '../components/Container';
import ContactsList from '../components/ContactsList';
import AddContactForm from '../components/AddContactForm';
import Filter from '../components/Filter';

function ContactsView() {
  return (
    <Container>
      <h1>Your Contacts</h1>
      <Section>
        <AddContactForm />
      </Section>
      <Section>
        <Filter />
        <ContactsList />
      </Section>
    </Container>
  );
}

export default ContactsView;
