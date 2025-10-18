import Generator from 'yeoman-generator';
import path from 'path';

export default class AppGenerator extends Generator {
  async prompting() {
    this.answers = await this.prompt([
      {
        type: 'list',
        name: 'template',
        message: 'Which template do you want to use?',
        choices: ['frontend', 'backend'],
      },
    ]);
  }

  writing() {
    const templateDir = this.answers.template;
    // Copy everything from the selected template folder
    this.fs.copy(
      this.templatePath(`templates/${templateDir}`),
      this.destinationPath()
    );
  }
}
