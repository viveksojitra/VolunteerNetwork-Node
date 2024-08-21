let volunteerStore = [];

const defaultController = (req, res) => {
    res.render('index', { volunteers: volunteerStore });
}

const addVolunteerController = (req, res) => {

    console.log("Add Volunteer");
    console.log("body", req.body.volunteer);

    let volunteerObj = {
        id: volunteerStore.length + 1,
        volunteer: `${req.body.fname} ${req.body.lname}`,
        email: req.body.email,
        contact: req.body.contact,
        skills: req.body.skills,
    }

    console.log("Obj", volunteerObj);

    volunteerStore = [...volunteerStore, volunteerObj]
    console.log("Store", volunteerStore);

    res.redirect('/');
}

const editVolunteerController = (req, res) => {
    console.log(req.params);
    let { id } = req.params
    let singleVolunteer = volunteerStore.find((volunteer) => {
        return volunteer.id == id
    })

    console.log("Single Volunteer..???", singleVolunteer);

    res.render('editVolunteer', { singleVolunteer });
}

const updateVolunteerController = (req, res) => {
    let { id } = req.params;

    volunteerStore = volunteerStore.map((volunteer) => {
        if (volunteer.id == id) {
            return {
                ...volunteer,
                volunteer: `${req.body.fname} ${req.body.lname}`,
                email: req.body.email,
                contact: req.body.contact,
                skills: req.body.skills
            };
        }
        return volunteer;
    });

    console.log("Volunteer Updated", volunteerStore);
    res.redirect('/');
};


const deleteVolunteerController = (req, res) => {

    let { id } = req.params
    let deleteVolunteer = volunteerStore.filter((volunteer) => {
        return volunteer.id != id
    })

    volunteerStore = deleteVolunteer

    console.log("Volunteer Store", volunteerStore);
    console.log("Delete Volunteer", deleteVolunteer);
    console.log('Volunteer Deleted');

    res.redirect('/');

    console.log("BODY >>>", req.body);
}

module.exports = { defaultController, addVolunteerController, editVolunteerController, updateVolunteerController, deleteVolunteerController }