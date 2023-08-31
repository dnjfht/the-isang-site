# Generated by Django 4.0.3 on 2023-08-30 08:14

from django.db import migrations, models
import django.db.models.deletion
import toolkit.models
import toolkit.validator


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='Toolkit',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('name', models.CharField(max_length=100)),
                ('description', models.TextField(blank=True, null=True)),
                ('time', models.IntegerField()),
            ],
        ),
        migrations.CreateModel(
            name='ToolkitMainCategory',
            fields=[
                ('name', models.CharField(max_length=100, primary_key=True, serialize=False)),
            ],
        ),
        migrations.CreateModel(
            name='ToolkitSubCategory',
            fields=[
                ('name', models.CharField(max_length=100, primary_key=True, serialize=False)),
            ],
        ),
        migrations.CreateModel(
            name='ToolkitImage',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('image', models.ImageField(blank=True, null=True, upload_to=toolkit.models.toolkit_image_upload_path, validators=[toolkit.validator.validate_image_file_extension])),
                ('toolkit', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, related_name='toolkitimage_toolkit', to='toolkit.toolkit')),
            ],
        ),
        migrations.AddField(
            model_name='toolkit',
            name='maincategory',
            field=models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, related_name='toolkit_maincategory', to='toolkit.toolkitmaincategory'),
        ),
        migrations.AddField(
            model_name='toolkit',
            name='subcategory',
            field=models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, related_name='toolkit_subcategory', to='toolkit.toolkitsubcategory'),
        ),
    ]
