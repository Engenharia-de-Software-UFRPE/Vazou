# Generated by Django 4.2.3 on 2023-08-14 03:41

import datetime
from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        ('vazou_app', '0004_alter_denuncia_title'),
    ]

    operations = [
        migrations.AddField(
            model_name='denuncia',
            name='dateTime',
            field=models.DateTimeField(blank=True, default=datetime.datetime.now, verbose_name='Data e hora'),
        ),
        migrations.AddField(
            model_name='noticia',
            name='company',
            field=models.ForeignKey(null=True, on_delete=django.db.models.deletion.CASCADE, related_name='noticias_empresa', to='vazou_app.empresa'),
        ),
        migrations.AlterField(
            model_name='denuncia',
            name='title',
            field=models.CharField(max_length=200, verbose_name='Título da denúncia'),
        ),
        migrations.AlterField(
            model_name='noticia',
            name='subtitle',
            field=models.TextField(max_length=200, verbose_name='Subtítulo'),
        ),
        migrations.AlterField(
            model_name='noticia',
            name='title',
            field=models.TextField(max_length=120, verbose_name='Título'),
        ),
        migrations.CreateModel(
            name='Acao',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('title', models.CharField(max_length=200, verbose_name='Título da ação')),
                ('text', models.TextField(max_length=3000, verbose_name='Texto')),
                ('dateTime', models.DateTimeField(blank=True, default=datetime.datetime.now, verbose_name='Data e hora')),
                ('company', models.ForeignKey(null=True, on_delete=django.db.models.deletion.CASCADE, related_name='acoes_empresa', to='vazou_app.empresa')),
            ],
            options={
                'db_table': 'acao',
            },
        ),
    ]