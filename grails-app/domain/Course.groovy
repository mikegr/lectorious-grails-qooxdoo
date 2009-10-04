class Course {

    String name
    String professor
    String time

    static constraints = {
    }

    static belongsTo = [university:University]
}
